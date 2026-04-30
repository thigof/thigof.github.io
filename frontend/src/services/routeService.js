import { pb } from 'src/services/pocketbase'
import { componentMap } from 'src/router/componentMap'

/**
 * Busca as rotas permitidas para o role do usuário atual.
 * Usuários não autenticados recebem rotas do role 'publico'.
 * Requer que sys_role_routes tenha listRule vazia (pública) na collection.
 */
export async function fetchAllowedRoutes() {
  const role = pb.authStore.model?.role || 'publico'
  try {
    const records = await pb.collection('sys_role_routes').getFullList({
      expand: 'route',
      sort:   'expand.route.order',
      filter: `route.active = true && role = "${role}"`,
    })
    return records.map((r) => r.expand?.route).filter(Boolean)
  } catch (err) {
    if (err?.status === 404 || err?.status === 403) return []
    throw err
  }
}

/**
 * Converte um registro de sys_routes em objeto Vue Router.
 * Retorna null se o path não existir no componentMap.
 * Não define requiresAuth — a proteção é feita pelo próprio registro da rota:
 * se o usuário não tem permissão, a rota não é adicionada ao router.
 */
export function toRouterRoute(route) {
  const component = componentMap[route.path]
  if (!component) return null

  return {
    path:      route.path,
    component,
    meta: {
      title:       route.title,
      description: route.description,
      group:       route.group,
      icon:        route.icon,
      color:       route.color,
      order:       route.order,
    },
  }
}

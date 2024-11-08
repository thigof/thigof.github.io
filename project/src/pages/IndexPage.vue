<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="submitForm" class="q-ma-lg">
      <fieldset>
        <input type="file" accept=".csv" @change="handleFileUpload" />
      </fieldset>
      <p class=""> Dados: {{ data?.values?.length }}</p>

      <fieldset class="q-mt-lg q-mb-lg">
        <label>
          <input type="checkbox" v-model="form.npatChecked" />
          NPAT
          <b class="text-red"> {{ (computedNpat) ? "" : (form.npat.length) ? "Não encontrado" : "" }}</b>
        </label>

        <div class="row">
          <input @:change="handleNpat" v-model="form.npat" type="text" style="width: auto;" />
          <button class="q-ml-sm" @click.prevent="handleNpat" :disabled="!computedNpat">Pesquisar</button>
        </div>

        <label>
          <input type="checkbox" v-model="form.descricaoChecked" />
          Descrição
        </label>
        <input v-model="form.descricao" type="text" class="input-flex" />

        <label>
          <input type="checkbox" v-model="form.localChecked" />
          Local
        </label>
        <input v-model="form.local" type="text" class="input-flex" />

        <label>
          <input type="checkbox" v-model="form.estadoChecked" />
          Estado
        </label>
        <input v-model="form.estado" type="text" class="input-flex" />

        <label>
          <input type="checkbox" v-model="form.obsChecked" />
          Observação
        </label>
        <input v-model="form.obs" type="text" class="input-flex" />
        <q-btn color="green-10" class="q-ma-sm" type="button" @click="submitForm">
          <q-icon name="add"></q-icon>
          Adicionar
        </q-btn>
      </fieldset>

      <fieldset class="q-mt-lg q-mb-lg">
        <q-btn alt="" color="green-4" icon="description" class="q-ml-sm" type="button"
          @click="gerarCSV(data.selected)">CSV</q-btn>
        <q-btn icon="code" color="green-4" class="q-ml-sm" type="button"
          @click.prevent="gerarTableRelatorio">Relatorio</q-btn>
        <q-btn icon="code" color="green-4" class="q-ml-sm" type="button" @click="gerarTableTermo">Termo</q-btn>
        <q-btn icon="clear" color="red-4" class="q-ml-sm" type="button" @click="limparTabela">LIMPAR</q-btn>
      </fieldset>

      <q-table :rows="data.selected" :columns="data.colunas" row-key="NRPATRIMONIO1" virtual-scroll flat bordered>
      </q-table>
    </q-form>
  </q-page>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import Papa, { LocalChunkSize } from 'papaparse';


const form = ref({
  npatChecked: false,
  npat: '',
  descricaoChecked: false,
  descricao: '',
  localChecked: false,
  local: '',
  estadoChecked: false,
  estado: '',
  obsChecked: false,
  obs: '',
  search1: '',
  search2: '',
  searchColumn: ''
});

const data = reactive({
  values: null, csv: "", selected: [], fields: [], colunas: [
    { field: 'NRPATRIMONIO1', label: 'NPAT', align: 'left' },
    { field: 'DESCRICAO', label: 'Descrição', align: 'left' },
    { field: 'LOCALIZACAO', label: 'Local', align: 'left' },
    { field: 'ESTADO', label: 'Estado', align: 'left' },
    { field: 'OBSERVAÇÃO', label: 'Observação', align: 'left' },
    { field: 'SITUAÇÃO', label: 'Situação', align: 'left' },
  ]
});


const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const csvData = e.target.result;
    data.csv = csvData
    const result = Papa.parse(csvData, {
      header: true,
    })
    data.values = result.data.map(e =>
      Object.keys(e).reduce((acc, key) => {
        if (key.trim()) acc[key] = e[key];
        return acc;
      }, { "SITUAÇÃO": "", "OBSERVAÇÃO": "" })
    );

    data.fields = result.meta.fields
    saveData()
  };
  reader.readAsText(file);
};

const saveData = () => {
  try {
    localStorage.setItem('data', JSON.stringify(data));
  } catch (error) {
    console.log("erro ao salvar: ", error);
  }
}


const handleNpat = () => {
  const value = data.values.find(e => e.NRPATRIMONIO1 === form.value.npat)
  if (value) {

    try {
      form.value.descricao = value.DESCRICAO
      form.value.local = value.LOCALIZAÇÃO
      form.value.estado = value.DESC_ESTADO
      form.value.obs = value.OBS
    } catch (error) {
      error
    }
  } else {
    form.value.descricao = ""
    form.value.local = ""
    form.value.estado = ""
    form.value.obs = ""
  }
  console.log("Valores: ", value)
}

const computedNpat = computed(() => {
  if (data?.values && form?.value.npat) {
    return data?.values?.find(e => e.NRPATRIMONIO1 === form.value.npat)
  } else {
    return false
  }
});

function gerarCSV(data, filename = 'data.csv', separator = ';') {
  const csv = [Object.keys(data[0]).join(separator), ...data.map(row => Object.values(row).join(separator))].join('\n');
  const link = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([csv], { type: 'text/csv' })),
    download: filename
  });
  link.click();
}

const gerarTableRelatorio = () => {
  gerarTableFormate(data.selected.map(e => ({
    NPAT: e['NRPATRIMONIO1'] || "",
    Setor: e['NOME_SETOR'] || "",
    Local: e['LOCALIZACAO'] || "",
    Valor: Number(e['VALOR']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || "",
    Estado: e['DESC_ESTADO'] || "",
  })))
}

const gerarTableTermo = () => {
  gerarTableFormate(data.selected.map(e => ({
    NPAT: e['NRPATRIMONIO1'] || "",
    Descrição: e['DESCRICAO'] || "",
    Local: e['LOCALIZACAO'] || "",
    Setor: e['NOME_SETOR'],
    Estado: e['DESC_ESTADO'] || "",
    Valor: Number(e['VALOR']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || "",
  })))
}


function gerarTable(data) {
  const tableHTML = `<table border="1" cellpadding="1" cellspacing="1" style="width:100%;" align="center"><thead><tr>${Object.keys(data[0]).map(h => `<th><strong>${h}<strong></th>`).join('')}</tr></thead><tbody>${data.map(row => `<tr>${Object.values(row).map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  // navigator.clipboard.writeText(tableHTML);
  return tableHTML
}

function gerarTableFormate(data) {
  const tableHTML = gerarTable(data)
  const tempElement = document.createElement('div');
  tempElement.innerHTML = tableHTML;
  document.body.appendChild(tempElement);
  const range = document.createRange();
  range.selectNodeContents(tempElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  document.body.removeChild(tempElement);
}

function limparTabela() {
  data.selected = [];
  saveData()
}

// Função para enviar o formulário (se necessário)
function submitForm() {
  const obj = Object.fromEntries(data.fields.map(key => [key, ""]));
  obj.NRPATRIMONIO1 = form.value.npat;
  obj.DESCRICAO = form.value.descricao;
  obj.LOCALIZACAO = form.value.local;
  obj.ESTADO = form.value.estado;
  obj.OBSERVAÇÃO = form.value.obs;

  if (!form.value.npat || form.value.npat === "0") {
    obj.SITUAÇÃO = "SEM PLACA";
    data.selected.push(obj);
  } else {
    const item = data?.values?.find(e => e.NRPATRIMONIO1 === form.value.npat);
    if (item) {
      console.log("Adicionar: ", item);
      Object.assign(item, obj, { SITUAÇÃO: "REGULAR" });
      data.selected.push(item);
    } else {
      obj.SITUAÇÃO = "SEM REGISTRO";
      data.selected.push(obj);
    }
  }
  saveData();
}

try {
  const storedData = localStorage.getItem('data');
  if (storedData) {
    const dt = JSON.parse(storedData)
    data.csv = dt.csv
    data.fields = dt.fields
    data.selected = dt.selected
    data.values = dt.values
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}

onMounted(() => {
});
</script>

<style scoped lang="scss">
.q-table {

  tbody {

    td {
      padding: 2px !important;
      height: 20px;
    }
  }

}
</style>

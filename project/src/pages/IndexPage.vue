<template>
  <q-page class="flex flex-center">
    <q-form @submit.prevent="submitForm" class="q-ma-lg">
      <fieldset>
        <label>Carregar CSV</label>
        <input type="file" accept=".csv" @change="handleFileUpload" />
      </fieldset>
      <p> Dados: {{ data?.values?.length }}</p>

      <label>
        NPAT
        <input type="checkbox" v-model="form.npatChecked" />
        <b class="text-red"> {{ (computedNpat) ? "" : "Não encontrado" }}</b>
      </label>
      <div class="row">
        <input @:change="handleNpat" v-model="form.npat" type="text" style="width: auto;" placeholder="Digite NPAT" />
        <button @click="handleNpat" :disabled="!computedNpat">Pesquisar</button>
      </div>
      <label>
        <input type="checkbox" v-model="form.descricaoChecked" />
        Descrição
      </label>
      <input v-model="form.descricao" type="text" class="input-flex" placeholder="Digite Descrição" />

      <label>
        <input type="checkbox" v-model="form.localChecked" />
        Local
      </label>
      <input v-model="form.local" type="text" class="input-flex" placeholder="Digite Local" />

      <label>
        <input type="checkbox" v-model="form.estadoChecked" />
        Estado
      </label>
      <input v-model="form.estado" type="text" class="input-flex" placeholder="Digite Estado" />

      <label>
        <input type="checkbox" v-model="form.obsChecked" />
        Observação
      </label>
      <input v-model="form.obs" type="text" class="input-flex" placeholder="Digite Observação" />

      <button type="button" @click="gerarCSV">Gerar CSV</button>
      <button type="button" @click="gerarHTML">Gerar HTML</button>
      <button type="button" @click="limparTabela">Limpar Tabela</button>

      <q-table :rows="tabelaDados" :columns="colunas">
        <template v-slot:top>
          <q-tr>
            <q-th>NPAT</q-th>
            <q-th>Descrição</q-th>
            <q-th>Local</q-th>
            <q-th>Estado</q-th>
            <q-th>Observação</q-th>
            <q-th></q-th>
          </q-tr>
        </template>
      </q-table>
    </q-form>
  </q-page>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';

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
});

const data = reactive({ values: null, csv: "" });

const tabelaDados = ref([]);
const colunas = ref([
  { name: 'npat', label: 'NPAT', align: 'left' },
  { name: 'descricao', label: 'Descrição', align: 'left' },
  { name: 'local', label: 'Local', align: 'left' },
  { name: 'estado', label: 'Estado', align: 'left' },
  { name: 'obs', label: 'Observação', align: 'left' },
]);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const csvData = e.target.result;
    data.csv = csvData
    data.values = convertCsvToJson(csvData);
    localStorage.setItem('data.values', JSON.stringify(data.values));
  };
  reader.readAsText(file);
};

const convertCsvToJson = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(';');

  return lines.slice(1).map(line => {
    const values = line.split(';');
    return headers.reduce((obj, header, index) => {
      obj[header.trim()] = values[index] ? values[index].trim() : '';
      return obj;
    }, {});
  });
};


const handleNpat = () => {
  const value = data.values.find(e => e.NRPATRIMONIO1 === form.value.npat)
  if (value) {

    try {
      form.value.descricao = value.DESCRICAO
      form.value.local = value.LOCALIZAÇÃO
      form.value.estado = value.ESTADO
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

function gerarCSV() {
  // Lógica para gerar o CSV
}

function gerarHTML() {
  // Lógica para gerar o HTML
}

function limparTabela() {
  tabelaDados.value = [];
}

// Função para enviar o formulário (se necessário)
function submitForm() {
  // Lógica para enviar o formulário
}

onMounted(() => {
  const storedData = localStorage.getItem('data.values');
  if (storedData) {
    data.values = JSON.parse(storedData)
  }
});
</script>

<style scoped>
form {
  background-color: #ffffff;
  padding: 20px;
  margin: 5px auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
}

form label {
  margin-bottom: 8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #3a3a3a;
}

form input[type="text"] {
  display: flex;
  width: 100%;
  padding: 8px;
  margin-bottom: 1px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 14px;
}

form button {
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}

th {
  background-color: #ffffff;
  border-bottom: 1px;
  background-color: rgb(245, 245, 245);
  font-size: 14px;
}

.erro {
  color: red;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

.inline {
  display: inline-block;
  vertical-align: middle;
}

fieldset {
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 14px;
}

.inline-block {
  display: inline-block;
  vertical-align: middle;
}

.form-controls {
  margin-top: 10px;
}
</style>

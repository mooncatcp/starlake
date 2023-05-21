<script lang="ts">
  import { appDataDir } from '@tauri-apps/api/path'
  import {privateKeyStore, publicKeyStore} from "../stores/keys";

  appDataDir().then(console.log)
</script>

<h1>{privateKeyStore.get()}</h1>
<h1>{publicKeyStore.get()}</h1>

{#await appDataDir()}
  <p>loading</p>
{:then value}
  <h1 class="text-3xl text-green-950">{value}</h1>
{/await}

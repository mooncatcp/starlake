<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Index from './pages/Index.svelte'
  export let url = '/'
</script>

<Router {url}>
  <Route url="/" component={Index} />
</Router>

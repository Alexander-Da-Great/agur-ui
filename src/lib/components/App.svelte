<script>
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import { Button } from "$lib/components/ui/button";
  import { toggleMode } from "mode-watcher";
</script>

<Button on:click={toggleMode} variant="outline" size="icon">Click Me</Button>

<Canvas>
  <Scene />
</Canvas>

<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'
  import Control from './ui/control/control.svelte';
	import Search from "lucide-svelte/icons/search";
	import { primaryRoutes, secondaryRoutes } from "./config.js";
	import { cn } from "$lib/utils.js";
	import * as Resizable from "./ui/resizable/index.js";
	import { Separator } from "./ui/select/index.js";
  import Nav from "./nav.svelte";
  import { Color } from 'three';
	export let defaultLayout = [265, 440, 655];
	export let defaultCollapsed = false;
	export let navCollapsedSize: number;

	let isCollapsed = defaultCollapsed;

	function onLayoutChange(sizes: number[]) {
		document.cookie = `PaneForge:layout=${JSON.stringify(sizes)}`;
	}

	function onCollapse() {
		isCollapsed = true;
		document.cookie = `PaneForge:collapsed=${true}`;
	}

	function onExpand() {
		isCollapsed = false;
		document.cookie = `PaneForge:collapsed=${false}`;
	}
  const bgColor = new Color('red');
</script>

<Resizable.PaneGroup
  direction="horizontal"
  {onLayoutChange}
  class="h-full items-stretch"
>
  <Resizable.Pane
    defaultSize={defaultLayout[0]}
    collapsedSize={navCollapsedSize}
    collapsible
    minSize={15}
    maxSize={20}
    {onCollapse}
    {onExpand}
  >
    <div
      class={cn(
        "flex h-[52px] items-center justify-center",
        isCollapsed ? "h-[52px]" : "px-2"
      )}
    >
    </div>
    <Control></Control>
    <Separator />
    <Nav {isCollapsed} routes={primaryRoutes} />
    <Separator />
    <Nav {isCollapsed} routes={secondaryRoutes} />
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Handle withHandle />
  <Resizable.Pane defaultSize={defaultLayout[1]}>
    <Canvas colorSpace={'srgb'}>
      <color
        attach="background"
        args={[bgColor.r, bgColor.g, bgColor.b]}
      />
      <Scene />
    </Canvas>
  </Resizable.Pane>
</Resizable.PaneGroup>
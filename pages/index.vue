<template>
  <div>
    <PageNav />
    <div
      v-if="ast"
      class="page-mdc-content"
    >
      <MDCRenderer
        v-if="ast.body"
        :body="ast.body"
        :data="ast.data"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * This PageMdcContent component is responsible for rendering the Markdown content of a page.
 * It should be generic enough to be utilized both for the [...page_slug].vue dynamic pages, as well as
 * for the "required" portal-defined pages such as `/products`, so that the route is enforced, but the
 * user is free to customize the page content via markdown configuration.
 */
import { parseMarkdown } from '@nuxtjs/mdc/runtime'


const route = useRoute()
const fetchKey = computed((): string => `portal-page${route.path.replace(/\//g, '-')}`)

const { transform, getCachedData } = serveCachedData()
const { data: pageData, error: pageError } = await useFetch('/api/document', {
  key: fetchKey.value,
  transform,
  getCachedData,
})
const { data: ast } = await useAsyncData<any>(() => parseMarkdown(pageData.value?.content || ''), {
  transform,
  getCachedData,
})
</script>

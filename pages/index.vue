<script lang="ts" setup>
import {getPageQuery} from "~/graphql/getPageQuery";
import TestBlock from "~/components/block/TestBlock.vue";
import HeroBlock from "~/components/block/HeroBlock.vue";
import ContentBlock from "~/components/block/ContentBlock.vue";

interface Block {
  __typename: string;
  id: string;
  [key: string]: any;
}

interface PageData {
  page: {
    data: {
      attributes: {
        blocks: Block[]
      }
    }
  }
}

const {data} = await useAsyncQuery<PageData>(getPageQuery)

const blockMap: { [key: string]: any } = {
  'ComponentBlockHero': HeroBlock,
  'ComponentBlockContent': ContentBlock,
  'ComponentBlockTest': TestBlock
}

const pageBlocks = ref<any[]>([])
if (data.value) {
  pageBlocks.value = data.value.page.data.attributes.blocks.map((block: any) => ({
    ...block,
    __typename: block.__typename
  }))
}

const getBlockComponent = (typename: string) => blockMap[typename] || null


</script>

<template>
  <main>
    <div v-for="element in pageBlocks" :key="element.id">
      <component :is="getBlockComponent(element.__typename)" v-bind="element"/>
    </div>
  </main>
</template>

<style scoped>


</style>

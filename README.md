
# url-pagination

## Project setup

```
npm install --save vuetify-url-pagination
```

or

```
yarn add vuetify-url-pagination
```

## Basic Usage

```javascript
<template>
  <url-pagination
    v-model="page"
    :event="search"
  />
</template>
<script>
import UrlPagination from "vueitfy-url-pagination";

export default {
  components:{
    UrlPagination
  },
  data() {
    return {
      page: 1
    }
  },
  methods: {
    search() {
      api.Search(this.page)
    }
  }
}
</script>

```

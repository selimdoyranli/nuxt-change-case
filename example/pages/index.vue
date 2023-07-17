<template>
  <div class="page">
    <header>
      <h1><a href="https://github.com/selimdoyranli/nuxt-change-case" target="_blank">nuxt-change-case</a></h1>
    </header>
    <main>
      <div class="result">
        <code> $pascalCase('hello world') </code>
        <h2> {{ $pascalCase('hello world') }} </h2>
      </div>

      <div class="result">
        <code> $lowerCase('Çocuk Adam Bak Buraya') </code>
        <h2> {{ $lowerCase('Çocuk Adam Bak Buraya') }} </h2>
      </div>

      <div class="result">
        <code> $localeUpperCase('şemsi paşa pasajında sesi büzüşesiceler', 'tr') </code>
        <h2> {{ $localeUpperCase('şemsi paşa pasajında sesi büzüşesiceler', 'tr') }} </h2>
      </div>

      <div class="result">
        <code> $localeLowerCase('KENAN MEMEDOV! SOVIETSKA ARMY', 'az') </code>
        <h2> {{ $localeLowerCase('KENAN MEMEDOV! SOVIETSKA ARMY', 'az') }} </h2>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  asyncData ({ $paramCase }) {
    console.log($paramCase('nuxt change case'))
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 2em;
  border-bottom: 1px solid #ddd;
  z-index: 2;
}

main {
  position: relative;
  display: block;
  top: calc(70px + 2em);
  padding: 2em;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

main .result {
  display: block;
  display: block;
  margin-bottom: 2em;
  border-bottom: 1px solid #ddd;
}

main .result code {
  background-color: #000;
  color: #fff;
  padding: 0.4em 0.8em;
  border-radius: 0.4em;
}
</style>

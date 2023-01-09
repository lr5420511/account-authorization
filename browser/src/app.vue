<template>
    <div id="root">
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url(./asset/less/variables.less);
@import url(./asset/less/flex-mixin.less);
@import url(./asset/less/devices-mixin.less);

.devices-mixin(@v-devices, @v-rem-percent);

html {
    overflow: auto;
}

body {
    .flex-mixin();
    margin: 0;
    background-color: extract(@v-colors, 6);
    font-family: consolas;
}
</style>

<style lang="less" scoped>
@import url(./asset/less/flex-mixin.less);

#root {
    .flex-mixin();
}
</style>
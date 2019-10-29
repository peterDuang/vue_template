<template>
    <div>
        <HelloWorld></HelloWorld>
        <button @click="testRequest" style="width:120px;height:40px">测试网路</button>
    </div>
</template>

<script>

import HelloWorld from '../components/HelloWorld'

export default {
    components:{
        HelloWorld
    },
    methods:{
        testRequest(){
            this.$loading('请求中...');
        this.$api.mock().then((res) => {
            var a = JSON.parse(res);
            console.log(a.base);
            console.log('请求完成' +JSON.stringify(a.address));
            this.$loading.close();
            }).catch((error) => {
                console.log('错误信息'+error.message);
                this.$loading.close();
                this.$toast.center(error.message);
            });
        }
    }
}
</script>

<style>

</style>
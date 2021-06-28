<template>
    <div class="my-card">
        <div class="content top">
            <h3>Pacientes</h3>
            <p>14</p>
        </div>

        <div class="content footer">
            <i class="fa fa-users"></i>
            <p class="qtd">9750</p>
        </div>
    </div>
</template>

<script>

export default{
    name: 'Cards',
    props: {
        
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';
.my-card {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    background-color: $red;
    color: #fff;
    padding: 15px;
    border-radius: 7px;

    .content {
        display: flex;
        justify-content: space-between;
    }
    .top {

    }
    .footer {

    }
}

</style>

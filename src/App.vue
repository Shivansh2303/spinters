<template>
    <div>
      <header>
        <img src="./assets/status_bar.png" alt="">
      </header>
    </div>
  <router-view/>
</template>

<script>
export default{
  name:'App',
  components:{

  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope&family=Outfit&display=swap');
*{
  margin: 0px;
  padding: 0px;
}
#app {
  width: 428px;
  height:926px;
  background-color: #0c0517;
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size:428px 926px ;
  transition: 0.35s;
}

</style>

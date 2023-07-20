<template>
    <div>
        <div>
            <p>More</p>
            <hr class="hr-more">
        </div>
        <main>
            <!-- <a href="#">Client testimonial</a> -->
            <div class="container">
                <h4>Client testimonial</h4>
                <img src="../assets/light.png" alt="" class="chevron-icon-right">
                <!-- <font-awesome-icon :icon="['fas', 'chevron-right']" class="chevron-icon-right" /> -->
                <hr>
                <!-- <a href="#">Customer Support</a> -->
                <h4>Customer Support</h4>
                <img src="../assets/light.png" alt="" class="chevron-icon-right">
                <!-- <font-awesome-icon :icon="['fas', 'chevron-right']" class="chevron-icon-right" /> -->
                <hr>
                <!-- <a href="#">Notification</a> -->
                <h4>Notification</h4>
                <img src="../assets/light.png" alt="" class="chevron-icon-right">
                <!-- <font-awesome-icon :icon="['fas', 'chevron-right']" class="chevron-icon-right" /> -->
                <hr>
                <h4 class="logout-text">Log out</h4>
            </div>
        </main>
    
</div></template>

<script>
export default {

}
</script>

<style scoped>
main {
    width: 388px;
    height: 217px;
    margin-left:20px;
}

p {
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: white;
    margin-top:44px;
    width: 40px;
    height:24px;
    gap: 8px;
    margin-left: 20px;
}

h4,
a {
    margin-bottom:6px;
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    color: white;
    position: relative;
    width: 123px;
    display: inline-block;
    margin-right: 243px;
    padding-bottom: 5px;

}

.hr-more {
    color: white;
    width: 388px;
    margin-left:20px;
}

hr {
    color: #FDCF13;
    width: 388px;
    margin-bottom: 22px;
}

.chevron-icon-right {
    widows: 24px;
    height: 24px;
    color: gray;
    position: absolute;
    display: inline-block;
}

.logout-text {
    color: #F81F59;

}
.container{
    margin-top:40px ;

}
</style>
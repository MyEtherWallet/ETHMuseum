<template>
<div class='block-card'>
    <div class='left-of-blockcard'>
        <div class='block-pic-hugger skeleton'>
        </div>
        <div class='mint-date skeleton skeleton-text'>
        </div>
    </div>
    <div class='right-of-blockcard'>
        <div class='card-title '>
            <h2 class='skeleton skeleton-text'>
            </h2>
        </div>
        <div class='card-owner-title'>
            <p class='skeleton skeleton-text'>
            </p>
        </div>
        <div class='comment-container'>
            <p class='skeleton skeleton-text'>
            </p>
        </div>
        <div class='details-container skeleton skeleton-text-detail'>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'BlockCardSkeleton'

}
</script>

<style scoped>

.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
    opacity: .7;
}
.skeleton-text {
    width: 80%;
    height:10px;
    margin-bottom: .25rem;
    border-radius: 20px;
}
.skeleton-text-detail {
    width: 50%;
    height:90px;
    margin-bottom: .25rem;
    border-radius: 20px;
}
@keyframes skeleton-loading {
    0% {
        background-color: rgb(214, 214, 214);
    }
    50% {
        background-color: rgb(200, 200, 200);
    }
    100% {
        background-color: rgba(238, 238, 238, 0.801);
    }
}

.block-card {

    width: 550px;
    height: 180px;
    border: none;
    display: flex;
    margin: 25px;
    background: #FFFF;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.226);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    /* border: 1px solid black; */
}

.left-of-blockcard {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid black; */
}

.mint-date {
    color: #F5A623;
    font-size: 11px;
    font-weight: 600;
    margin-top: 10px;
    /* border: 1px solid black; */
}

.right-of-blockcard {
    width: 70%;
    height: 100%;
    display: flex;
    text-align: flex-start;
    flex-direction: column;
    /* border: 1px solid black; */
}

.card-title {
    width: 20%;
    height: 50px;
    padding-top: 5px;
    font-size: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
}

.card-owner-title {
    width: 100%;
    height: 30px;
    text-align: left;
    font-size: 12px;
    margin-top: -28px;
    color: #939FB9;
}

.comment-container {
    width: 80%;
    height: fit-content;
    font-size: 12px;
    text-align: left;
    /* border: 1px solid black; */
}

.details-container {
    width: 30%;
    height: 50px;
    display: flex;
    margin-top: 30px;;
    /* border: 1px solid black; */
}

.details-container h1 {
    font-size: 12px;
    font-weight: 700;
    margin: 0;
    cursor: pointer;
}

.details-container h1:hover {
    color: #5A678A
}

.right-of-details-container {
    width: 50%;
    height: 100%;
    text-align: left;
    /* border: 1px solid black; */
}

.block-pic {
    width: 50px;
    height: 50px;
    z-index: 2;
}

.block-pic-hugger {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 20px;
    padding: 5px;
    z-index: 2;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.267);
}
</style>

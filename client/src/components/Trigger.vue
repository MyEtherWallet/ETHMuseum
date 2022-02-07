<template>
<span ref='trigger' />
</template>

<script>
export default {
    name: 'Trigger',
    props: ['options'],
    data: () => ({
        observer: null,
    }),
    mounted() {
        const options = {
            root: null,
            threshold: 1,
            rootMargin: "0px"
        };
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                this.$emit("intersect");
                console.log('Observer TRIGGERED!')
                // console.log(entry)
            }
        }, options);
        this.observer.observe(this.$refs.trigger);
                // console.log(options)
        // console.log(this.observer)
        // console.log(this.options)
        // console.log(this.trigger)
    },
    beforeUnmount() {
        this.observer.disconnect();
    },
};
</script>

<style scoped>

</style>

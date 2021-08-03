new Vue({
    el:'#app',
    data: {
        syukka: 0,
        preNumCup: 0,
        numCase: 0,
        amari: 0,
        goukei: 0,
    },
    methods: {
        onclick: function(){
            
            this.goukei = this.preNumCup - this.syukka
            this.amari = this.goukei % 30;
            this.numCase = parseInt(this.goukei / 30);
        }
    },
});

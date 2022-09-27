const app = Vue.createApp({
  data() {
    const stored = localStorage.getItem('BA1');
    return {
      weeks: stored ? JSON.parse(stored) : new Array(14).fill().map(e => ({
        courses: [{
            name: 'Analyse',
            tasks: [{
              name: 'Fiche',
              completed: false
            },{
              name: 'Série',
              completed: false
            }]
          },{
            name: 'Algèbre linéaire',
            tasks: [{
              name: 'Fiche',
              completed: false
            },{
              name: 'Série',
              completed: false
            }]
          },{
            name: 'Mécanique',
            tasks: [{
              name: 'Fiche',
              completed: false
            },{
              name: 'Série',
              completed: false
            }]
          },{
            name: 'Programmation',
            tasks: [{
              name: 'Fiche',
              completed: false
            },{
              name: 'Série',
              completed: false
            }]
          },{
            name: 'AICC',
            tasks: [{
              name: 'Fiche',
              completed: false
            },{
              name: 'Série',
              completed: false
            }]
          }],
      }))
    }
  },
  watch: {
    weeks: {
      deep: true,
      handler(val) {
        localStorage.setItem('BA1', JSON.stringify(val));
      }
    }
  },
  computed: {
    currentWeek() {
      const date = new Date();
      const start = new Date('19 Sep 2022');
      const diff = date - start;
      const week = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);
      return week;
    }
  },
  mounted() {
    this.$nextTick(() => {
      // scroll to the only element that has the class week but not the class disabled
      const el = document.querySelector('.week:not(.disabled)');
      el.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
app.mount('#app');
var unit = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      playground: 5,
      unit: ['px','pt','pc','cm','mm','in','em','ex','ch','rem','vw','vh','vmin','vmax','%']
    }
  }
)

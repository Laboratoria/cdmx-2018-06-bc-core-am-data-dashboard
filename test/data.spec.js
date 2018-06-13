describe('data', () => {

  it('debería exponer función computarUsuarios en objeto global', () => {
    assert.isFunction(computarUsuarios);
  });

  it('debería exponer función ordenarUsuarios en objeto global', () => {
    assert.isFunction(ordenarUsuarios);
  });

  it('debería exponer función buscarUsuarios en objeto global', () => {
    assert.isFunction(buscarUsuarios);
  });

  describe('computarUsuarios(usuarios)', () => {

    //const cohort = fixtures.users.find(item => item.id === 'lim-2018-03-pre-core-pw');
    //const courses = Object.keys(cohort.coursesIndex);
    const { usuarios } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad status', () => {
      const processed = computarUsuarios(usuarios);
      
      //assert.equal(usuarios.length, processed.length);

      processed.forEach( (usuario, i) => {
        assert.ok(usuario.hasOwnProperty('status'));
        assert.isNumber(usuario.status.porcentajeCompletado);
        /*assert.isObject(usuario.status.temas);
        assert.isNumber(usuario.status.temas.porcentajeCompletado);
        assert.isNumber(usuario.status.duracionTema);
        assert.isObject(usuario['status']['temas'][i]['subtemas']);
        assert.isNumber(usuario.status.temas.subtemas.porcentajeCompletado);
        assert.isString(usuario.status.temas.subtemas.tipo);
        assert.isNumber(usuario.status.temas.subtemas.duracion);*/
      });
    });

    describe('usuario.status para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computarUsuarios(usuarios);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {

    it('debería retornar arreglo de usuarios ordenado por nombre ASC');
    it('debería retornar arreglo de usuarios ordenado por nombre DESC');
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC');
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC');
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC');
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC');
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC');
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC');
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC');
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC');
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC');
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC');

  });

  describe('filterUsers(users, filterBy)', () => {

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)');

  });
});

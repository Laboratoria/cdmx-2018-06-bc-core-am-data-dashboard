describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  describe('computeUsersStats(users)', () => {

    //const cohort = fixtures.users.find(item => item.id === 'lim-2018-03-pre-core-pw');
    //const courses = Object.keys(cohort.coursesIndex);
    const { users } = fixtures;

    it('debería retornar arreglo de users con propiedad stats', () => {
      const processed = computeUsersStats(users);
      
      //assert.equal(usuarios.length, processed.length);

      processed.forEach( (user, i) => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user['stats']['completedPercentage'])
        assert.isObject(user['stats']['topics']);
        assert.isNumber(user['stats']['topics'][i]['completedPercentage']);
        assert.isNumber(user['stats']['topics'][i]['topicDuration']);
        assert.isObject(user['stats']['topics'][i]['subtopics']);
        assert.isNumber(user['stats']['topics'][i]['subtopics'][i]['completedPercentage']);
        assert.isString(user['stats']['topics'][i]['subtopics'][i]['type']);
        assert.isNumber(user['stats']['topics'][i]['subtopics'][i]['duration']);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users);

      it(
        'debería tener propiedad completedPercentage con valor 89',
        () => assert.equal(processed[0]['stats']['completedPercentage'], 89)
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

  describe('filterUsers(users, search)', () => {

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)');

  });
});

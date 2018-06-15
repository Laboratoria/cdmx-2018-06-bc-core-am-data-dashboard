describe('data', () => {

  it('debería exponer función computeStudentsStats en objeto global', () => {
    assert.isFunction(computeStudentsStats);
  });

  it('debería exponer función computeGenerationsStats en objeto global', () => {
    assert.isFunction(computeGenerationsStats);
  });

  it('debería exponer función sortStudents en objeto global', () => {
    assert.isFunction(sortStudents);
  });

  it('debería exponer función filterStudents en objeto global', () => {
    assert.isFunction(filterStudents);
  });

  describe('computeStudentsStats(laboratoria)', () => {

    //const cohort = fixtures.users.find(item => item.id === 'lim-2018-03-pre-core-pw');
    //const courses = Object.keys(cohort.coursesIndex);
    const { laboratoria } = fixtures;

    it('debería retornar arreglo de students con propiedad stats', () => {
      const processed = computeStudentsStats(laboratoria);

      processed.forEach( (student, i) => {
        assert.ok(student.hasOwnProperty('stats'));
        assert.isNumber(student['stats']['completedPercentage'])
        assert.isObject(student['stats']['topics']);
        assert.isNumber(student['stats']['topics'][i]['completedPercentage']);
        assert.isNumber(student['stats']['topics'][i]['topicDuration']);
        assert.isObject(student['stats']['topics'][i]['subtopics']);
        assert.isNumber(student['stats']['topics'][i]['subtopics'][i]['completedPercentage']);
        assert.isString(student['stats']['topics'][i]['subtopics'][i]['type']);
        assert.isNumber(student['stats']['topics'][i]['subtopics'][i]['duration']);
      });
    });

    describe('student.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeStudentsStats(laboratoria);

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

  describe('sortStudents(users, orderBy, orderDirection)', () => {

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

  describe('filterStudents(users, search)', () => {

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)');

  });
});

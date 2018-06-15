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

    const { laboratoria } = fixtures;

    it('debería retornar arreglo de students con propiedad campus y propiedad generation', () => {
      const processed = computeStudentsStats(laboratoria);

      processed.forEach((student) => {
        assert.ok(student.hasOwnProperty('campus'));
        assert.ok(student.hasOwnProperty('generation'));
      });
    });

    it('debería retornar arreglo de students con propiedad stats', () => {
      const processed = computeStudentsStats(laboratoria);
    
      processed.forEach( (student, i) => {
        assert.ok(student.hasOwnProperty('stats'));
        assert.isNumber(student.stats.completedPercentage);
        assert.isObject(student.stats.topics);
        assert.isNumber(student.stats.topics[i].completedPercentage);
        assert.isNumber(student.stats.topics[i].topicDuration);
        assert.isObject(student.stats.topics[i].subtopics);
        assert.isNumber(student['stats']['topics'][i]['subtopics'][i]['completedPercentage']);
        assert.isString(student['stats']['topics'][i]['subtopics'][i]['type']);
        assert.isNumber(student['stats']['topics'][i]['subtopics'][i]['duration']);
        });
    });

    describe('student.stats para el primer usuario en data de prueba - ver carpeta data/', () => {
      const processed = computeStudentsStats(fixtures);

      it('debería tener propiedad completedPercentage con valor 89', () => {       
        assert.equal(processed[0].stats.completedPercentage, 89);
      });

      it('debería tener propiedad completedPercentage dentro de propiedad topics con valor 80', () => {
        //assert.equal(processed[0])
      });
      it('debería tener propiedad percentageDuration dentro de propiedad topics con valor 79');

      it(`debería tener propiedad "0-bienvenida-orientacion" dentro de objeto subtopics con valor 
      {completado: 1, duracionSubtema: 55, tipo: "lectura"}`, () => {
        const topics = Object.keys(processed[0].stats.topics);
        const subTopics = Object.keys(processed[0].stats.topics[topics[0]].subtopics);
       
          assert.deepEqual(processed[0].stats.topics[topics[0]].subtopics[subTopics[0]], {
            completado: 1,
            duracionSubtema: 55,
            tipo: "lectura"
          });
      });
    });
  });

  describe('computeGenerationsStats(laboratoria)', () => {
    const { laboratoria } = fixtures;
    const processed = computeGenerationsStats(fixtures);

    it('debería retornar un arreglo de generaciones con propiedad average y count', () => {
      processed.forEach((generation) => {
        assert.ok(generation.hasOwnProperty('average'));
        assert.ok(generation.hasOwnProperty('count'));
      })
    });
    
    describe('generation para la primera generación en data de prueba - ver carpeta data/', () => {
      const processed = computeGenerationsStats(fixtures);

      it('debería tener una propiedad average con valor 75', () => {
        assert.equal(processed[0].average, 75);
      });

      it('debería tener una propiedad count con valor 15', () => {
        assert.equal(processed[0].count, 15);
      });

    }); 
  });
  
  describe('sortStudents(students, orderBy, orderDirection)', () => {

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

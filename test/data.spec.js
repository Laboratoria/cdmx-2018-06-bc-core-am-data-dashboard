// const assert = require("chai").assert;
// const computeStudentsStats = require("../src/data.js");
describe('data', () => {
  it('debería exponer función computeStudentsStats en objeto global', () => {
    assert.isFunction(computeStudentsStats);
    // assert.equal(typeof computeStudentsStats, '[object Function]');
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

      processed.forEach( (student) => {
        assert.ok(student.hasOwnProperty('stats'));
        assert.isNumber(student.stats.completedPercentage);
        assert.isObject(student.stats.topics);
        assert.isNumber(student.stats.topics["01-Introduccion-a-programacion"].completedPercentage);
        assert.isNumber(student.stats.topics["01-Introduccion-a-programacion"].percentageDuration);
        assert.isObject(student.stats.topics["01-Introduccion-a-programacion"]["00-bienvenida-orientacion"]);
        assert.isNumber(student['stats']['topics']["01-Introduccion-a-programacion"]["00-bienvenida-orientacion"]['completedPercentage']);
        assert.isString(student['stats']['topics']["01-Introduccion-a-programacion"]["00-bienvenida-orientacion"]['type']);
        assert.isNumber(student['stats']['topics']["01-Introduccion-a-programacion"]["00-bienvenida-orientacion"]['duration']);
        });
    });

    describe('student.stats para el primer usuario en data de prueba - ver carpeta data/', () => {
      const processed = computeStudentsStats(fixtures);

      it('debería tener propiedad completedPercentage con valor 89', () => {
        assert.equal(processed[0].stats.completedPercentage, 89);
      });

      it('debería tener propiedad completedPercentage dentro de propiedad topics con valor 80', () => {
        assert.equal(processed[0].stats.topics['01-Introduccion-a-programacion'].completedPercentage, 80);
      });
      it('debería tener propiedad percentageDuration dentro de propiedad topics con valor 130', () => {
        assert.equal(processed[0].stats.topics['01-Introduccion-a-programacion'].percentageDuration, 130)
      });

      it(`debería tener propiedad subtopics que es un objeto con primera key "00-bienvenida-orientacion" con valor
      {completado: 1, duracionSubtema: 30, tipo: "lectura"}`, () => {
        const topics = processed[0].stats.topics;
        const subTopics = processed[0].stats.topics['01-Introduccion-a-programacion']["00-bienvenida-orientacion"];

          assert.deepEqual(processed[0].stats.topics['01-Introduccion-a-programacion']["00-bienvenida-orientacion"], {
            completedPercentage: 1,
            duration: 30,
            type: "lectura"
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
    it('debería retornar arreglo de estudiantes ordenado por nombre ASC',()=>{
      const students = computeStudentsStats(fixtures);
      const orderBy = "name";
      const orderDirection = "ASC";
      const processed = sortStudents(students, orderBy, orderDirection);
      assert.equal(processed[0].name, "Aaliyah Lessie");
    });
    it('debería retornar arreglo de estudiantes ordenado por nombre DESC',()=>{
      const students = computeStudentsStats(fixtures);
      const orderBy = "name";
      const orderDirection = "DESC";
      const processed = sortStudents(students, orderBy, orderDirection);
      assert.equal(processed[0].name, "Yolanda Zula");
    });
    it('debería retornar arreglo de estudiantes ordenado por porcentaje general ASC',()=>{
      const students = computeStudentsStats(fixtures);
      const orderBy = "percentage";
      const orderDirection = "ASC";
      const processed = sortStudents(students, orderBy, orderDirection);
      assert.equal(processed[0].stats.completedPercentage, 89);
    });
    it('debería retornar arreglo de estudiantes ordenado por porcentaje general DESC',()=>{
      const students = computeStudentsStats(fixtures);
      const orderBy = "percentage";
      const orderDirection = "DESC";
      const processed = sortStudents(students, orderBy, orderDirection);
      assert.equal(processed[0].stats.completedPercentage, 89);
    });
  });

  describe('filterStudents(users, search)', () => {
    it('debería retornar nuevo arreglo solo con estudiantes con nombres que contengan string (Aileen Edwyna)',()=>{
      //const { laboratoria } = fixtures;
      const students = computeStudentsStats(fixtures);
      const search = 'Aileen Edwyna';
      const filter = filterStudents(students,search);
      assert.equal(filter[0].name, 'Aileen Edwyna');
      assert.equal(filter[1].name, 'Aileen Edwyna');
    });

  });
});

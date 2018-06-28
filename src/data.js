window.global = {
  computeStudentsStats: () => {
    const url = `https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

};

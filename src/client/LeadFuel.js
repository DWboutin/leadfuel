class LeadFuel {

  createApplication(cb) {
    let leadFuelDiv = document.createElement('div');

    leadFuelDiv.setAttribute('id', 'leadfuel');
    document.body.appendChild(leadFuelDiv);

    if (typeof cb === "function") {
      cb();
    }
  }

}
export default new LeadFuel();
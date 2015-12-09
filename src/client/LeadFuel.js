class LeadFuel {

  createApplication(cb) {
    let leadFuelDiv = document.createElement('div');

    leadFuelDiv.setAttribute('id', 'leadfuel');
    document.body.appendChild(leadFuelDiv);

    if (typeof cb === "function") {
      cb();
    }
  }

  addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
  }
  removeEvent(el, type, handler) {
    if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
  }

}
export default new LeadFuel();
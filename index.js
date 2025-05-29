(function () {
  const isMarkupInjected = document.querySelectorAll(
    "#monthly-donor-banner"
  ).length;
  const markup = `
  <section id="monthly-donor-banner" class="monthly-donor-banner">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 col-10 content-wrapper">
          <h2 class="headline text-center">
            Notre programme de dons mensuels a un impact de&nbsp;taille:
          </h2>
          <ul class="monthly-list text-sm-center">
            <li>
              Il crée des bases solides pour que nous puissions nous concentrer
              sur les solutions à long&nbsp;terme
            </li>
            <li>
              Il réduit les coûts associés à la collecte de fonds, ce qui nous
              permet d’allouer davantage de ressources à notre&nbsp;mission
            </li>
            <li>
              Il nous permet de prévoir notre budget de façon efficace et de
              développer des programmes&nbsp;durables
            </li>
            <li>Il fait une différence en continu, 365 jours par&nbsp;année</li>
          </ul>
          <div class="btn-wrapper text-center">
            <a
              href="/loger-nourrir-aimer"
              class="btn btn-normal btn-monthly"
              data-feathr-click-track="true"
              data-feathr-link-aids="6680097d182d4e7b419ab7b5"
            >
              Devenez donateur mensuel
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;

  // Check if the markup is already injected
  !isMarkupInjected &&
    document
      .querySelector("#secondary_cta_two_items_1")
      .insertAdjacentHTML("afterend", markup);
})();

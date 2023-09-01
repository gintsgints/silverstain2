<template>
  <h2>Lasi tekstu!</h2>
  <p>Reiz bija ābele. Tā ļoti mīlēja
    <Popper :show="puiselis">
      <v-btn class="text-none text-subtitle-1" @mouseenter="puiselis = true"
        @mouseleave="puiselis = false">puišelii</v-btn>
      <template #content>
        <div>Puišelis – mazs zēns.

          <v-img :width="300" aspect-ratio="16/9" cover src="@/assets/puiselis.jpeg"></v-img>
        </div>
      </template>
    </Popper>
    . Puišelis apciemoja ābeli katru dienu. Viņš
    <Popper :show="rapas">
      <v-btn class="text-none text-subtitle-1" @mouseenter="rapas = true" @mouseleave="rapas = false">rāpās</v-btn>
      <template #content>
        <div>Rāpās (rāpties) – kāpt augšup.</div>
      </template>
    </Popper>
    pa ābeles
    stumbru, šūpojās tās zaros un ēda ābolus. Reizēm abi spēlēja

    paslēpes

    . Puišelis atpūtās ābeles paēnā. Puišelis ļoti
    mīlēja ābeli. Ābele bija laimīga.
  </p>
  <p>Ritēja laiks. Puišelis paaugās un retāk apciemoja ābeli. Ābele bieži palika viena. Reiz puika atkal apciemoja ābeli.
  </p>
  <p>Ābele teica: “Puišeli, rāpies augšā pa stumbru, šūpojies zaros, ēd ābolus, rotaļājies manā pavēnī un esi laimīgs!”
  </p>
  <p>“Es esmu pārāk liels, lai kāpelētu pa kokiem un rotaļātos,” atbildēja puika. “Es gribu nopirkt dažādas lietas un
    priecāties par dzīvi. Man vajag naudu. Vai vari iedot man naudu?”</p>
  <p>“Piedod!” atbildēja ābele, “man ir tikai āboli. Puišeli, salasi ābolus un ved tos uz pilsētu pārdot! Par āboliem tu
    saņemsi naudu un būsi laimīgs.”</p>
  <p>Puika uzrāpās kokā, norāva visus ābolus un aizveda. Ābele bija ļoti laimīga.</p>
  <p>Pēc kāda laika puika atkal atnāca pie ābeles. Ābele priecīgi iešalkojās: “Puišeli! Rāpies augšā pa stumbru, šūpojies
    zaros un esi laimīgs!”</p>
  <p>“Man ir pārāk daudz darāmā un nav laika kāpelēt pa kokiem,” atbildēja puika. ”Es gribu uzcelt sev siltu māju,” viņš
    turpināja, “gribu sievu un bērnus. Vai vari iedot man māju?”</p>
  <p>“Man nav mājas,” ābele atteica, “taču tu vari apzāģēt manus zarus un no tiem uzcelt sev māju. Tad tu būsi laimīgs.”
    Puika nozāģēja visus ābeles zarus un paņēma sev līdzi, lai būvētu māju. Ābele bija laimīga.</p>
  <p>Nākamajā apciemojumā puika teica ābelei: “Man vajag laivu, ar ko aizpeldēt tālu projām no šejienes. Vai tev ir tāda
    laiva?”</p>
  <p>Ābele atbildēja: “Nocērt manu stumbru un uzbūvē sev laivu! Tad varēsi doties ceļā un būsi laimīgs.”</p>
  <p>Puika nocirta ābeles stumbru un uzbūvēja laivu, ar kuru aizpeldēja tālu projām. Ābele bija laimīga. Kaut arī vairs ne
    tik ļoti laimīga.</p>
  <p>Pēc ilga laika puika atgriezās. Ābele viņu uzrunāja: “Piedod, puišeli,” ābele teica, “bet man vairs nav nekā, ko tev
    dot!” Viņa atgādināja, ka nav ābolu, ko ēst, un nav zaru, kur šūpoties. Puika ābeli mierināja, ka viņam ir slikti
    zobi, lai ēstu ābolus, un viņš ir par vecu, lai šūpotos.</p>
  <p>“Nav arī stumbra,” nopūtās ābele, “tu nevarēsi pa to kāpelēt.” Puika atbildēja, ka ir pārāk noguris, lai kāpelētu.
  </p>
  <p>Ābele teica: “Tagad no manis ir palicis pāri tikai vecs celms.” Puika un ābele pārrunāja un vienojās, ka sēdēšanai un
    elpas atvilkšanai tomēr noderēs arī vecs celms.</p>
  <p>“Nāc, puišeli, pasēdi un atpūties,” aicināja ābele. Puika apsēdās.</p>
  <p>Ābele bija laimīga.</p>
  <p>Beigas.</p>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import Popper from "vue3-popper";

let puiselis = ref(false)
let rapas = ref(false)

defineComponent({
  components: {
    Popper,
  },
});

</script>

<style>
:root {
  --popper-theme-background-color: #fad7dd;
  --popper-theme-background-color-hover: #fad7dd;
  --popper-theme-border-width: 1px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>

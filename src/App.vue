<template>
  <!-- Composant /src/components/Bouton.vue 
    Exemple d'usage de slot pour le contenu -->
  <Bouton>Test de bouton</Bouton>

  <div class="p-2">
    <!-- Les images sont simplement l'URL absolue (depuis la racine, débute par '/' )
      Pour passer une chaine de caratére *satique/litérale* : on note l'attribut de façon classique.
      Pour passer une valeur dynamique ou un nombre ou autre (booléen) : on utilise un "binding" avec ':', le contenu de l'attribut devient alors du JS qui est interpreté.
      -->
    <card
      :nbr-s-d-b="2"
      :prix="5000"
      :favori="true"
      image="/images-maisons/maison-1.jpg"
      nom="Beverly Springfield"
    />
    <!-- Pour un booléen il est possible de noter juste le nom de l'attribut pour le mettre à 'true' -->
    <card
      :nbr-s-d-b="1"
      :prix="2700"
      favori
      image="/images-maisons/maison-2.jpg"
      nom="Autre maison"
    />
  </div>
</template>

<script>
import card from "./components/card.vue";
import Bouton from "./components/Bouton.vue";

export default {
  components: { card, Bouton },
};
</script>
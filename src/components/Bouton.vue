<template>
  <div
    class="
      flex
      justify-center
      items-center
      relative
      gap-2
      px-4
      py-2.5
      rounded-lg
      bg-indigo-500
    "
  >
    <p
      class="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-white"
    >
      <!-- Exemple d'usage de slot pour le contenu.
    "<slot />" sera remplacé par le contenu mit entre les balise "<bouton>contenu</bouton>" de chaque instance -->
      <slot />
    </p>
  </div>
</template>
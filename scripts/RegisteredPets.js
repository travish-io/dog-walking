import { getPets, getWalkers } from "./database.js";
const walkers = getWalkers();
const pets = getPets();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("pet")) {
    const [, petId] = itemClicked.id.split("--");
    const petWalker = walkers.find((walker) => walker.id == petId);
    for (const pet of pets) {
      if (pet.id === parseInt(petId)) {
        window.alert(`${pet.name} is being walked by ${petWalker.name}`);
      }
    }
  }
});

export const RegisteredPets = () => {
  let petHTML = "<ul>";

  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};

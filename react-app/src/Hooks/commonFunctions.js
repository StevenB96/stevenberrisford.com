import {
  MdOutlineSportsKabaddi,
  MdOutlineContactPhone,
  MdOutlineComputer,
  MdNewspaper
} from "react-icons/md";

const scrollToTop = (elementRef) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
};

const getMenuIcon = ({ iconName, isHighlighted = false }) => {
  let icon = null;

  switch (iconName) {
    case 'MdOutlineComputer':
      icon = <MdOutlineComputer
        size={'max(3vw, 20px)'}
        color={isHighlighted ? 'black' : '#555555'} />;
      break;
    case 'MdNewspaper':
      icon = <MdNewspaper
        size={'max(3vw, 20px)'}
        color={isHighlighted ? 'black' : '#555555'} />;
      break;
    case 'MdOutlineSportsKabaddi':
      icon = <MdOutlineSportsKabaddi
        size={'max(3vw, 20px)'}
        color={isHighlighted ? 'black' : '#555555'} />;
      break;
    case 'MdOutlineContactPhone':
      icon = <MdOutlineContactPhone
        size={'max(3vw, 20px)'}
        color={isHighlighted ? 'black' : '#555555'} />;
      break;
  }

  return icon;
};

const generateConsistentUUID = () => {
  const userAgent = navigator.userAgent; // User-Agent string
  const screenResolution = `${window.screen.width}x${window.screen.height}`; // Screen resolution
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown"; // Timezone
  const language = navigator.language || navigator.userLanguage || "unknown"; // Language
  const platform = navigator.platform; // Platform info
  const hardwareConcurrency = navigator.hardwareConcurrency || "unknown"; // Number of logical processors

  // Create a base string using these characteristics
  const baseString = [
      userAgent,
      screenResolution,
      timezone,
      language,
      platform,
      hardwareConcurrency
  ].join('-');

  // Create a hash or deterministic value from the base string
  const hash = createDeterministicHash(baseString); // Use a hashing function to create a consistent output

  return hash;
}

// A simple hash function can be used to generate deterministic results
const createDeterministicHash = (input) => {
  // A basic example of hash generation (not a cryptographically secure method!)
  let hash = 0, i, chr;
  for (i = 0; i < input.length; i++) {
      chr = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr; // hash * 31 + chr
      hash |= 0; // Convert to 32bit integer
  }
  return 'uuid-' + Math.abs(hash); // Ensuring positive hashes
}

// To save to Local Storage while ensuring persistence across sessions
const saveUUID = (uuid) => {
  localStorage.setItem('consistentUUID', uuid);
}

const getPersistentUUID = () => {
  const existingUUID = localStorage.getItem('consistentUUID');
  if (existingUUID) {
      return existingUUID; // Return the existing UUID
  } else {
      const newUUID = generateConsistentUUID();
      saveUUID(newUUID); // Save the new UUID to local storage
      return newUUID;
  }
}

export default {
  scrollToTop,
  getMenuIcon,
  getPersistentUUID,
};
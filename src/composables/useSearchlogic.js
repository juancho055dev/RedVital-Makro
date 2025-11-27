import { ref,computed, watch, onMounted } from "vue";

import Fuse from "fuse.js";
import { useCarruselStoreMakro } from "../store/ItemsMakro";
import { useCarruselStoreRedvital } from "../store/ItemsRedvital";
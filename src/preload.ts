import { contextBridge } from "electron";
import * as more4less from "more4less";

contextBridge.exposeInMainWorld("more4less", {
  search: async (searchTerm: string) =>
    await new more4less.SearchEngine("All").search(searchTerm),
});

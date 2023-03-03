import React from "react";
import { useGetNotesQuery } from "../redux/api/notesApi";

const useNotifications = () => {
  const notes = useGetNotesQuery(undefined, {
    pollingInterval: 30000,
  });
  const hasNew = notes.data?.find((n: any) => !n.readed);
  return { ...notes, hasNew };
};

export default useNotifications;

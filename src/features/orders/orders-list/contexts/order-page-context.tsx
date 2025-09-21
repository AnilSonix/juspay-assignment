import { useDebouncedValue } from "@mantine/hooks";
import constate from "constate";
import { useState } from "react";
import useOrders from "../hooks/use-orders";
type useOrdersPageContextProps = {};

function useOrdersPage(props: useOrdersPageContextProps) {
  const [text, setText] = useState("");
  const [dedouncedText] = useDebouncedValue(text, 500);
  const [fields, setFields] = useState<string[]>([]);

  const query = useOrders({
    query: dedouncedText,
    fields,
  });

  function toggleField(fieldId: string) {
    setFields((fields) =>
      fields.includes(fieldId)
        ? fields.filter((f) => f !== fieldId)
        : fields.concat([fieldId])
    );
  }

  return { props, query, text, setText, fields, setFields, toggleField };
}

export const [OrdersPageProvider, useOrdersPageContext] =
  constate(useOrdersPage);

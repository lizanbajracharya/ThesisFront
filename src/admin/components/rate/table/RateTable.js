import MaterialTable from "@material-table/core";
import React, { useState } from "react";
import { useRateTable } from "../../../hooks/components/brand/table/useRateTable";
import AddIcon from "@mui/icons-material/Add";
import RateForm from "../form/RateForm";

const RateTable = () => {
  const { data, columns } = useRateTable();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <MaterialTable
        title=""
        data={data?.rates}
        columns={columns}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: () => <AddIcon id="addBrand" />,
            tooltip: "Add Rate",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
          },
        ]}
      />
      <RateForm open={open} handleClose={() => handleClose()} />
    </>
  );
};

export default RateTable;

import { Paginator as PrimeReactPaginator } from "primereact/paginator";

interface PaginationProps {
  limit?: number;
  onPageChange: (data: any) => void;
  page?: number;
  total?: number;
}

const template: any = {
  layout: "PrevPageLink NextPageLink",
  CurrentPageReport: (options: any) => {
    
    return (
      <span
        style={{
          color: "var(--text-color)",
          userSelect: "none",
          width: "120px",
          textAlign: "center",
          fontSize: "1.0rem",
        }}
      >
        {options.props.first} - {options.last} of {options.props.totalRecords}
      </span>
    );
  },
};

export const Pagination = ({
  limit = 10,
  onPageChange,
  page = 1,
  total = 0,
}: PaginationProps) => (
  <>
    <PrimeReactPaginator
      template={template}
      first={page}
      onPageChange={onPageChange}
      rows={limit}
      rowsPerPageOptions={[10, 20, 30]}
      totalRecords={total}
      className="justify-center my-8"
    ></PrimeReactPaginator>
    <style jsx global>
      {`
        .p-paginator {
          font-family: "GT-America";
        }
      `}
    </style>
  </>
);

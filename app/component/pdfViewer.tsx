import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export interface PdfViewerProps {
  src: string;
  width?: string | number
  height?: string | number
}
export default function PdfViewer({ src }: PdfViewerProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex flex-wrap justify-end gap-2">
        <Button
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          startIcon={<OpenInNewIcon />}
        >
          Open
        </Button>
        <Button
          href={src}
          download={src.split("/").pop() ?? "document.pdf"}
          variant="contained"
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </div>
      <Box
        component="iframe"
        src={src}
        title="Resume"
        sx={{
          width: "100%",
          aspectRatio: "1 / 1.414",
          border: 1,
          borderColor: "divider",
          borderRadius: 1,
        }}
      />
    </div>
  );
}

import PrimaryButton from "./PrimaryButton";

interface PdfButtonProps {
  onClick: () => void;
  text?: string;
}

export default function PdfButton({
  onClick,
  text = "📄 Scarica PDF",
}: PdfButtonProps) {
  return (
    <PrimaryButton onClick={onClick}>
      {text}
    </PrimaryButton>
  );
}
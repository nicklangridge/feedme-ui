export default function Snippet({ text }: { text: string }) {
  return (
    <span>“{ text || "No preview available" }”</span>
  );
}
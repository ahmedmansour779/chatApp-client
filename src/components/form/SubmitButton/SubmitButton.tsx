export type SubmitButtonProps = {
  title: string
};
export default function SubmitButton({ title }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="bg-primary p-1 rounded-md text-white text-sm "
    >
      {title}
    </button>
  );
}

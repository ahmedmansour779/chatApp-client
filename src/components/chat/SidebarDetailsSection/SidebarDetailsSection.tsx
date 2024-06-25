interface SidebarDetailsSectionProps {
  itemId: number
}

export default function SidebarDetailsSection({ itemId }: SidebarDetailsSectionProps) {
  return (
    <div className="col-span-6">
      <h1>{itemId}</h1>
    </div>
  );
}

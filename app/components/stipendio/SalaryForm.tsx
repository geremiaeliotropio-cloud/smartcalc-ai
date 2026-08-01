import Card from "../common/Card";
import Input from "../common/Input";
import PrimaryButton from "../common/PrimaryButton";
import Select from "../common/Select";

interface Props {
  ral: string;
  mensilita: string;

  setRal: (value: string) => void;
  setMensilita: (value: string) => void;

  onCalculate: () => void;
}

export default function SalaryForm({
  ral,
  mensilita,
  setRal,
  setMensilita,
  onCalculate,
}: Props) {
  return (
    <Card className="mt-10 p-8">
      <div className="space-y-6">
        <Input
          label="RAL (€)"
          type="number"
          value={ral}
          placeholder="Es. 30000"
          onChange={setRal}
        />

        <Select
          label="Mensilità"
          value={mensilita}
          onChange={setMensilita}
          options={[
            {
              value: "13",
              label: "13 Mensilità",
            },
            {
              value: "14",
              label: "14 Mensilità",
            },
          ]}
        />

        <PrimaryButton
          onClick={onCalculate}
          className="w-full"
        >
          Calcola Stipendio
        </PrimaryButton>
      </div>
    </Card>
  );
}
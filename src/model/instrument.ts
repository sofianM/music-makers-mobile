export class InstrumentGradeDTO {
  id: number;
  score: number;
  instrument: InstrumentDTO;
}

export class InstrumentDTO {
  id: number;
  name: string;
  soort: InstrumentSoortDTO;
  uitvoering: InstrumentUitvoeringDTO;
  type: InstrumentTypeDTO;
}

export class InstrumentSoortDTO {
  id: number;
  name: string;
}

export class InstrumentUitvoeringDTO {
  id: number;
  name: string;
}

export class InstrumentTypeDTO {
  id: number;
  name: string;
}

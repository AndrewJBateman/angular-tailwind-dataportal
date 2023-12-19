/**
 * Interface for Pharma data model
 * Contains properties for drug code, class name, identification number,
 * brand name, descriptor, number of active ingredients, AI group number,
 * company name, and last update date
 */
export interface IPharmaData {
  drug_code?: number;
  class_name?: string;
  drug_identification_number?: string;
  brand_name?: string;
  descriptor?: string;
  number_of_ais?: string;
  ai_group_no?: string;
  company_name?: string;
  last_update_date?: string;
}

export class PharmaData implements IPharmaData {
  constructor(
    public drug_code?: number,
    public class_name?: string,
    public drug_identification_number?: string,
    public brand_name?: string,
    public descriptor?: string,
    public number_of_ais?: string,
    public ai_group_no?: string,
    public company_name?: string,
    public last_update_date?: string
  ) {};
}

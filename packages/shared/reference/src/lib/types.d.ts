interface Reference {
    reference_id: string
    reference_name_l10n: ReferenceNameL10n
    reference_name: string
    created_at: string
    updated_at: string
    is_deleted: number
    sync_at: any
    additional_information: any
    last_modified_by: any
    category_id: number
  }
  export type ReferenceTypes = {
    [key: string]: Reference[];
  };
  interface ReferenceNameL10n {
    ul : string | undefined;
    en : string | undefined;
    hi : string | undefined;
  }
  
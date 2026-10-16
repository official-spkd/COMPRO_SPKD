export type CompanyProfile = {
  name: string | null
  email: string | null
  phone: string | null
  address: string | null
  work_hour: string | null
}

// Profil perusahaan dari API Laravel (/company-profile). Mengembalikan null bila gagal
// atau kosong; pemakai menyediakan teks cadangannya sendiri.
export const useCompanyProfile = async () => {
  const {
    public: { apiBase },
  } = useRuntimeConfig()

  const { data } = await useFetch<{ data: CompanyProfile }>(`${apiBase}/company-profile`, {
    key: 'company-profile',
  })

  return computed(() => data.value?.data ?? null)
}

/*
 * SSC KLA Directory - Data Layer
 * Design: Institutional Elegance (Navy & Gold)
 * Source: 2025-26 KLAs Academic Structure PDF + ssc.edu.hk/Meet Our Team
 * Photos: CDN-hosted (uploaded from school website)
 */

export interface Teacher {
  name: string;
  role?: string;
  photo?: string;
}

export interface Subject {
  name: string;
  teachers: Teacher[];
}

export interface KLA {
  id: string;
  name: string;
  coordinator: string;
  coordinatorTitle?: string;
  coordinatorPhoto?: string;
  subjects: Subject[];
}

export interface Programme {
  label: string;
  fullLabel: string;
  klas: KLA[];
}

export type ProgrammeKey = 'HKDSE' | 'IBDP';

// CDN-hosted teacher photos (verified URLs)
const photos: Record<string, string> = {
  'Mrs Julie Ma': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/JMA_9993aab9.jpg',
  'Mr Corwin Kan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/KCO_99419ff7.jpg',
  'Mr YH Lam': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LYH_1379e9f1.jpg',
  'Mr Max So': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/SCK_e91f863f.jpg',
  'Ms Winnie Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WTW_98196d77.jpg',
  'Mrs Josephine Cheung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/NBW_227b0307.jpg',
  'Mrs Abby Kwok': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/KPC_b98dc7e1.jpg',
  'Mr Jeremy Yeung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YHL_f1481f98.jpg',
  'Mr Derek Barham': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/BDV_03681011.jpg',
  'Mr Thomas Broadhead': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/BTH_c579f43e.jpg',
  'Ms Cheyenne Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CCD_f416b880.jpg',
  'Ms Cadence Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CCM2_870d74ed.jpg',
  'Ms Ally Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CCM_d711414a.jpg',
  'Mr Enoch Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CCN_33983ae2.jpg',
  'Mr Roy Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CHL2_bd50842b.jpg',
  'Ms Natalie Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CHL3_64653048.jpg',
  'Mr KP Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CKP_7dc7eca0.jpg',
  'Ms Tiffany Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CLY_9ce0b353.jpg',
  'Ms Silver Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CNS_cc573574.jpg',
  'Ms Sophie Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CSY4_d674d5cd.jpg',
  'Ms Jane Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CWY3_d7fe2f4a.jpg',
  'Mr Eric Chan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CYW2_e938b5c0.jpg',
  'Mr Felix Cheng': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CMH_70b5b3a5.jpg',
  'Dr Clement Cheng': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CWM2_48fd4d84.jpg',
  'Ms Apple Cheung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CKP2_1a59eaf7.jpg',
  'Ms Rony Cheung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CYW_c391088f.jpg',
  'Ms Emily Choi': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CKM5_204d7c96.jpg',
  'Mr Clinton Chong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CKL_00e33391.jpg',
  'Ms Stephanie Chow': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CML_b67d5c4d.jpg',
  'Ms Helena Chow': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CMY_15e45667.jpg',
  'Ms Cherry Chow': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CNL_9e2ab452.jpg',
  'Mr Eddie Chu': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CCW_0170b7bb.jpg',
  'Mr Kelvin Chui': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CHH_debecef5.jpg',
  'Mr Andy Chung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/CSK_deb55085.jpg',
  'Mrs Teresa de Vries': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LWY2_5c223c0c.jpg',
  'Mr Vibert Dung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/DYL_2e84e1e2.jpg',
  'Ms Dorothy Gregory': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/GDO_429de370.jpg',
  'Mrs Amrita Harjani': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/HAM_afb53bee.jpg',
  'Ms Jasmine Hui': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/HWY_96ee4e08.jpg',
  'Ms Erica Hung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/HYY_982f99a4.jpg',
  'Mr Eric Koo': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/KKH_4c613ba1.jpg',
  'Mrs Alisa Koo': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WKP_0b248d28.jpg',
  'Ms Faye Lai': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LWF2_8521f4b0.jpg',
  'Ms Dorothy Lai': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LYW2_be800955.jpg',
  'Ms Stephanie Lam': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LSL_446c4459.jpg',
  'Mr Daniel Lau': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LCT_242718b1.jpg',
  'Ms Carmen Lau': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LFT_4fdc507f.jpg',
  'Ms Andrea Lau': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LWY3_cafb1552.jpg',
  'Mrs Mickey Lee': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WYJ_2ad356df.jpg',
  'Mr C S Lee': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LCS_42feb576.jpg',
  'Mr Timothy Lee': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LCK_3b12bb76.jpg',
  'Ms Jojo Lee': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LJY_acc24b8e.jpg',
  'Mr Edwin Lee': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LKH5_36375ca0.jpg',
  'Mr Mark Lee': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LYC_8ff9c8c3.jpg',
  'Ms Judy Leung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LKH4_269af1e3.jpg',
  'Mr Dennis Leung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LKL_fc66385e.jpg',
  'Mr Clement Leung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LKM_341b1cfb.jpg',
  'Ms Ada Li': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LPY2_9d05707d.jpg',
  'Mr Timothy Lim': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LKW2_4b0b1a72.jpg',
  'Ms Ivy Liu': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LYW_9bd5ee3e.jpg',
  'Mrs Joanna Lo': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LYP_5378a43d.jpg',
  'Ms Vivian Lun': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LHM_c66eaf78.jpg',
  'Mr Marco Ma': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/MKY_d5cc0811.jpg',
  'Dr Yukon Man': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/MYH2_1d5bb434.jpg',
  'Ms Daisy Mo': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/MYH_b9ee8367.jpg',
  'Mr Christopher Moon': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/MCA_7822e61c.jpg',
  'Mr Stephen Ng': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/NSH_502a617b.jpg',
  'Mrs Kit Ng': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WKI_ac6792af.jpg',
  'Ms Gigi Pang': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/PKC_dc97bb10.jpg',
  'Mrs Elaine Pun': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/LHW_42880773.jpg',
  'Mr Tony Siu': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/SPW_cced3605.jpg',
  'Ms Vivian Suen': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/SMW_8ca7c4b2.jpg',
  'Ms Claire Tam': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TTN_9fbb4212.jpg',
  'Mr Theodore Tam': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TTH_314e002e.jpg',
  'Ms Amy Tam': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TWY_2dd2495c.jpg',
  'Ms Shinya Tan': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TXH_ce3b416e.jpg',
  'Ms Iris Tang': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TYL_b397107d.jpg',
  'Ms Ida Tse': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TYK_6738e0a9.jpg',
  'Ms Cecilia Tsui': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/THY_342fc0ec.jpg',
  'Mr Tun Nay Win': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TNW_b8627eab.jpg',
  'Ms Tebbie Tung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TIC_a76bed40.jpg',
  'Mr Alan Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WAL_18b09f43.jpg',
  'Mr C M Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WCM_2cd8f570.jpg',
  'Ms Katherine Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WHK_64eae49e.jpg',
  'Ms Carol Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WHY_7365f431.jpg',
  'Mr Calvin Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WKL_202ec430.jpg',
  'Ms Micky Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WMY_aafe4825.jpg',
  'Mr Roy Wong': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/WPH_5504a17c.jpg',
  'Ms Dawn Xu': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/XCH_4eb5290c.jpg',
  'Ms Arlene Yau': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YNL_31ad83bc.jpg',
  'Ms Eleena Yeung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YMK_805cd561.jpg',
  'Ms Wany Yeung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YWL_132d1cbe.jpg',
  'Mr Edmond Yuen': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YED_080ba55f.jpg',
  'Ms Becky Yuen': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YML_088552f0.jpg',
  'Mr Henry Yung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YCY_7f919ac4.jpg',
  'Ms Fion Yung': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/YMW_4d25caf3.jpg',
  'Ms Jackie Zhang': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/ZJI_892158cc.jpg',
  'Ms Clara Tse': 'https://d2xsxph8kpxj0f.cloudfront.net/310519663427729175/MXjaGiVHUigmqHC6AojJ29/TYS_e0ad9044.jpg',
};

function t(name: string, role?: string): Teacher {
  return { name, role, photo: photos[name] };
}

function coord(name: string): string | undefined {
  return photos[name];
}

export const klaData: Record<ProgrammeKey, Programme> = {
  HKDSE: {
    label: 'HKDSE',
    fullLabel: 'S1–S3 & DSE Academic Structure (2025–2026)',
    klas: [
      {
        id: 'chinese-lang',
        name: 'Chinese Language Education',
        coordinator: 'Ms Shinya Tan',
        coordinatorPhoto: coord('Ms Shinya Tan'),
        subjects: [{
          name: 'Chinese Language / Chinese Scholastic Programme',
          teachers: [
            t('Ms Shinya Tan', 'Subject Panel Head'),
            t('Ms Jane Chan'),
            t('Ms Apple Cheung'),
            t('Ms Cherry Chow'),
            t('Ms Stephanie Chow', 'Junior Subject Panel Head'),
            t('Mrs Abby Kwok'),
            t('Ms Dorothy Lai'),
            t('Ms Faye Lai'),
            t('Mr C S Lee'),
            t('Mrs Mickey Lee'),
            t('Mrs Kit Ng'),
            t('Ms Gigi Pang'),
            t('Mrs Elaine Pun', 'Junior Subject Panel Head'),
            t('Mr Roy Wong'),
            t('Ms Arlene Yau'),
            t('Ms Jackie Zhang'),
          ],
        }],
      },
      {
        id: 'english-lang',
        name: 'English Language Education',
        coordinator: 'Mr Theodore Tam',
        coordinatorPhoto: coord('Mr Theodore Tam'),
        subjects: [{
          name: 'English Language / English and Language Arts / English Language and Literature',
          teachers: [
            t('Mr Theodore Tam', 'Subject Panel Head'),
            t('Ms Judy Leung', 'Assistant Panel Head'),
            t('Mr Thomas Broadhead'),
            t('Ms Cheyenne Chan'),
            t('Ms Natalie Chan'),
            t('Ms Sophie Chan'),
            t('Mr Clinton Chong'),
            t('Mrs Teresa de Vries'),
            t('Ms Jasmine Hui'),
            t('Ms Erica Hung'),
            t('Ms Jojo Lee'),
            t('Mr Timothy Lim'),
            t('Mr Christopher Moon'),
            t('Ms Claire Tam'),
            t('Mr Tun Nay Win'),
            t('Ms Winnie Wong'),
          ],
        }],
      },
      {
        id: 'mathematics',
        name: 'Mathematics Education',
        coordinator: 'Mr Eric Koo',
        coordinatorPhoto: coord('Mr Eric Koo'),
        subjects: [{
          name: 'Mathematics and Mathematics M1 & M2',
          teachers: [
            t('Mr Eric Koo', 'Subject Panel Head'),
            t('Ms Ally Chan'),
            t('Mr Roy Chan', 'Junior Subject Panel Head'),
            t('Ms Silver Chan'),
            t('Ms Rony Cheung'),
            t('Ms Helena Chow'),
            t('Ms Andrea Lau'),
            t('Ms Carmen Lau'),
            t('Mr Daniel Lau'),
            t('Mr Edwin Lee'),
            t('Mr Timothy Lee'),
            t('Ms Tebbie Tung'),
            t('Ms Katherine Wong'),
            t('Ms Wany Yeung'),
          ],
        }],
      },
      {
        id: 'science',
        name: 'Science Education',
        coordinator: 'Mr Jeremy Yeung',
        coordinatorPhoto: coord('Mr Jeremy Yeung'),
        subjects: [
          {
            name: 'Biology',
            teachers: [
              t('Mr Jeremy Yeung', 'Subject Panel Head'),
              t('Mr Tony Siu'),
              t('Ms Becky Yuen'),
            ],
          },
          {
            name: 'Chemistry',
            teachers: [
              t('Mrs Josephine Cheung', 'Subject Panel Head'),
              t('Mr Vibert Dung'),
            ],
          },
          {
            name: 'Physics',
            teachers: [
              t('Mr YH Lam', 'Subject Panel Head'),
              t('Mr Felix Cheng'),
            ],
          },
          {
            name: 'Science (S1–S3)',
            teachers: [
              t('Mr Tony Siu', 'Subject Panel Head'),
              t('Ms Emily Choi'),
              t('Mrs Josephine Cheung'),
              t('Mr Eddie Chu'),
              t('Mr Jeremy Yeung'),
              t('Mr Eric Chan'),
              t('Mr Felix Cheng'),
              t('Mrs Amrita Harjani'),
              t('Mr Dennis Leung'),
              t('Dr Yukon Man'),
              t('Ms Becky Yuen'),
            ],
          },
        ],
      },
      {
        id: 'humanities',
        name: 'Personal, Social and Humanities Education',
        coordinator: 'Ms Carol Wong',
        coordinatorPhoto: coord('Ms Carol Wong'),
        subjects: [
          {
            name: 'Chinese History',
            teachers: [
              t('Mr KP Chan', 'Subject Panel Head'),
              t('Ms Tiffany Chan'),
              t('Ms Apple Cheung'),
              t('Mr C M Wong'),
            ],
          },
          {
            name: 'Citizenship, Economics and Society',
            teachers: [
              t('Ms Carol Wong', 'Subject Panel Head'),
              t('Mr Kelvin Chui'),
              t('Mr Corwin Kan'),
              t('Ms Clara Tse'),
            ],
          },
          {
            name: 'Economics',
            teachers: [
              t('Mr Calvin Wong', 'Subject Panel Head'),
              t('Mr Kelvin Chui'),
              t('Ms Cecilia Tsui'),
            ],
          },
          {
            name: 'Geography',
            teachers: [
              t('Mr Max So', 'Subject Panel Head'),
              t('Dr Clement Cheng'),
              t('Ms Micky Wong'),
              t('Ms Eleena Yeung'),
            ],
          },
          {
            name: 'History',
            teachers: [
              t('Ms Dawn Xu', 'Subject Panel Head'),
              t('Mr Corwin Kan'),
              t('Mr Kelvin Chui', 'S1 History'),
              t('Ms Clara Tse', 'S1 History'),
              t('Ms Carol Wong', 'S1 History'),
            ],
          },
          {
            name: 'Ethics and Religious Studies',
            teachers: [
              t('Ms Winnie Wong', 'Subject Panel Head'),
              t('Ms Cheyenne Chan'),
              t('Mr Clinton Chong'),
              t('Mr Andy Chung'),
            ],
          },
          {
            name: 'Integrated Humanities',
            teachers: [
              t('Ms Carol Wong', 'Subject Panel Head'),
              t('Mr Kelvin Chui'),
              t('Mr Andy Chung'),
              t('Mr Corwin Kan'),
              t('Ms Clara Tse'),
            ],
          },
        ],
      },
      {
        id: 'technology',
        name: 'Technology Education',
        coordinator: 'Mr Stephen Ng',
        coordinatorPhoto: coord('Mr Stephen Ng'),
        subjects: [
          {
            name: 'Business, Accounting & Financial Studies',
            teachers: [t('Ms Cadence Chan', 'Subject Panel Head')],
          },
          {
            name: 'Computer & Information Technology',
            teachers: [
              t('Mr Edmond Yuen', 'Subject Panel Head'),
              t('Mr Eric Chan'),
              t('Ms Carmen Lau'),
              t('Mr Clement Leung'),
              t('Mr Stephen Ng'),
              t('Ms Katherine Wong'),
            ],
          },
          {
            name: 'Information & Communication Technology',
            teachers: [
              t('Mr Stephen Ng', 'Subject Panel Head'),
              t('Mr Edmond Yuen'),
            ],
          },
          {
            name: 'Design & Technology',
            teachers: [t('Ms Iris Tang', 'Subject Panel Head')],
          },
          {
            name: 'Food & Home Management',
            teachers: [t('Ms Fion Yung', 'Subject Panel Head')],
          },
        ],
      },
      {
        id: 'arts',
        name: 'Arts Education',
        coordinator: 'Mrs Alisa Koo',
        coordinatorPhoto: coord('Mrs Alisa Koo'),
        subjects: [
          {
            name: 'Visual Arts',
            teachers: [
              t('Mrs Alisa Koo', 'Subject Panel Head'),
              t('Mrs Joanna Lo'),
            ],
          },
          {
            name: 'Music',
            teachers: [
              t('Ms Vivian Suen', 'Subject Panel Head'),
              t('Mr Enoch Chan'),
            ],
          },
        ],
      },
      {
        id: 'pe',
        name: 'Physical Education',
        coordinator: 'Mr Marco Ma',
        coordinatorPhoto: coord('Mr Marco Ma'),
        subjects: [{
          name: 'Physical Education',
          teachers: [
            t('Mr Marco Ma', 'Subject Panel Head'),
            t('Ms Stephanie Lam'),
            t('Ms Amy Tam'),
          ],
        }],
      },
      {
        id: 'csd',
        name: 'Citizenship and Social Development',
        coordinator: 'Ms Ivy Liu',
        coordinatorPhoto: coord('Ms Ivy Liu'),
        subjects: [{
          name: 'Citizenship and Social Development',
          teachers: [
            t('Ms Ivy Liu', 'Subject Panel Head'),
            t('Mr Corwin Kan'),
            t('Mr Henry Yung'),
          ],
        }],
      },
    ],
  },
  IBDP: {
    label: 'IBDP',
    fullLabel: 'Bridging and IBDP Academic Structure (2025–2026)',
    klas: [
      {
        id: 'ib-group1',
        name: 'Group 1: Studies in Language and Literature',
        coordinator: 'Ms Daisy Mo',
        coordinatorTitle: 'HOG',
        coordinatorPhoto: coord('Ms Daisy Mo'),
        subjects: [
          {
            name: 'Chinese Language and Literature',
            teachers: [t('Ms Ada Li'), t('Ms Daisy Mo')],
          },
          {
            name: 'Chinese A: Language and Literature',
            teachers: [t('Ms Cherry Chow'), t('Ms Daisy Mo')],
          },
          {
            name: 'Chinese A: Literature',
            teachers: [t('Ms Ada Li')],
          },
          {
            name: 'Chinese Language',
            teachers: [{ name: 'Ms Han Tsoi' }],
          },
          {
            name: 'English Language and Literature',
            teachers: [t('Ms Dorothy Gregory'), t('Mr Timothy Lim')],
          },
          {
            name: 'English A: Language and Literature',
            teachers: [t('Ms Dorothy Gregory')],
          },
        ],
      },
      {
        id: 'ib-group2',
        name: 'Group 2: Language Acquisition',
        coordinator: 'Mr Alan Wong',
        coordinatorTitle: 'HOG',
        coordinatorPhoto: coord('Mr Alan Wong'),
        subjects: [
          {
            name: 'Chinese B',
            teachers: [t('Ms Cherry Chow'), t('Ms Daisy Mo')],
          },
          {
            name: 'English B',
            teachers: [t('Ms Natalie Chan'), t('Mr Alan Wong')],
          },
          {
            name: 'Spanish ab initio',
            teachers: [{ name: 'Ms Han Tsoi' }],
          },
        ],
      },
      {
        id: 'ib-group3',
        name: 'Group 3: Individuals and Societies',
        coordinator: 'Ms Cecilia Tsui',
        coordinatorTitle: 'HOG',
        coordinatorPhoto: coord('Ms Cecilia Tsui'),
        subjects: [
          {
            name: 'Economics',
            teachers: [
              t('Mr Derek Barham'),
              t('Ms Cadence Chan'),
              t('Mr Mark Lee'),
              t('Ms Cecilia Tsui'),
              t('Mr Henry Yung'),
            ],
          },
          {
            name: 'Geography',
            teachers: [t('Ms Micky Wong')],
          },
          {
            name: 'History',
            teachers: [t('Mr Derek Barham'), t('Ms Tiffany Chan')],
          },
          {
            name: 'Psychology',
            teachers: [t('Ms Eleena Yeung')],
          },
        ],
      },
      {
        id: 'ib-group4',
        name: 'Group 4: Experimental Sciences',
        coordinator: 'Mr Jeremy Yeung',
        coordinatorTitle: 'HOG',
        coordinatorPhoto: coord('Mr Jeremy Yeung'),
        subjects: [
          {
            name: 'Biology',
            teachers: [t('Ms Emily Choi'), t('Mr Jeremy Yeung'), t('Ms Becky Yuen')],
          },
          {
            name: 'Physics',
            teachers: [t('Mr Dennis Leung')],
          },
        ],
      },
      {
        id: 'ib-group5',
        name: 'Group 5: Mathematics',
        coordinator: 'Ms Carmen Lau',
        coordinatorTitle: 'HOG',
        coordinatorPhoto: coord('Ms Carmen Lau'),
        subjects: [
          {
            name: 'Mathematics',
            teachers: [t('Ms Silver Chan'), t('Ms Carmen Lau'), t('Mr Edwin Lee')],
          },
          {
            name: 'Mathematics: Analysis and Approaches',
            teachers: [t('Ms Silver Chan'), t('Ms Carmen Lau'), t('Mr Daniel Lau')],
          },
          {
            name: 'Mathematics: Applications and Interpretation',
            teachers: [t('Mr Edwin Lee')],
          },
        ],
      },
      {
        id: 'ib-group6',
        name: 'Group 6: Arts & Electives',
        coordinator: 'Mr Derek Barham',
        coordinatorTitle: 'HOG',
        coordinatorPhoto: coord('Mr Derek Barham'),
        subjects: [
          {
            name: 'Chemistry',
            teachers: [t('Mrs Amrita Harjani'), t('Dr Yukon Man')],
          },
          {
            name: 'Music',
            teachers: [t('Ms Ida Tse')],
          },
          {
            name: 'Visual Arts',
            teachers: [t('Ms Vivian Lun')],
          },
        ],
      },
      {
        id: 'ib-core',
        name: 'Core',
        coordinator: '',
        subjects: [
          {
            name: 'Creativity, Activity and Service',
            teachers: [
              t('Mr Alan Wong', 'Coordinator'),
              t('Mrs Amrita Harjani'),
              t('Mr Mark Lee'),
              t('Ms Daisy Mo'),
              t('Ms Micky Wong'),
            ],
          },
          {
            name: 'Extended Essay',
            teachers: [t('Ms Carmen Lau', 'Coordinator')],
          },
          {
            name: 'Theory of Knowledge',
            teachers: [
              t('Mr Derek Barham', 'Coordinator'),
              t('Ms Dorothy Gregory'),
              t('Mr Mark Lee'),
              t('Ms Ida Tse'),
              t('Mr Alan Wong'),
            ],
          },
          {
            name: 'Citizenship and Social Development',
            teachers: [t('Mr Derek Barham'), t('Mr Henry Yung')],
          },
        ],
      },
    ],
  },
};

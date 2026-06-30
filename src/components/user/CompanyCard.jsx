import { HiOfficeBuilding } from 'react-icons/hi'

function CompanyCard({ company }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
          <HiOfficeBuilding className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Company</h2>
      </div>
      
      <div className="space-y-4">
        <div className="pb-4 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company Name</p>
          <p className="text-lg font-bold text-gray-900">{company.name}</p>
        </div>
        
        {company.catchPhrase && (
          <div className="pb-4 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Catchphrase</p>
            <p className="text-gray-700 italic leading-relaxed">"{company.catchPhrase}"</p>
          </div>
        )}
        
        {company.bs && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Business</p>
            <p className="text-gray-700 leading-relaxed">{company.bs}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompanyCard

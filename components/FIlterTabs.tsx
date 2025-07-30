import classNames from 'classnames';

interface FilterTab {
    key: string;
    label: string;
    count?: number;
}

interface FilterTabsProps {
    tabs: FilterTab[];
    activeTab: string;
    onTabChange: (tabKey: string) => void;
    className?: string;
}

const FilterTabs = ({ tabs, activeTab, onTabChange, className = '' }: FilterTabsProps) => {
    return (
        <div className={`border-b border-gray-200 dark:border-gray-700 ${className}`}>
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => onTabChange(tab.key)}
                        className={classNames(
                            'whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200',
                            activeTab === tab.key
                                ? 'border-medical-primary text-medical-primary'
                                : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                        )}
                    >
                        {tab.label}
                        {tab.count !== undefined && (
                            <span className={classNames(
                                'ml-2 py-0.5 px-2 rounded-full text-xs',
                                activeTab === tab.key
                                    ? 'bg-medical-primary bg-opacity-10 text-medical-primary'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                            )}>
                {tab.count}
              </span>
                        )}
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default FilterTabs;